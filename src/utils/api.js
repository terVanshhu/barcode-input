import axios from 'axios';

const OPEN_FOOD_FACTS_API = 'https://world.openfoodfacts.org/api/v0/product/';
const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';

async function getOpenFoodFactsData(barcode) {
  try {
    const response = await axios.get(`${OPEN_FOOD_FACTS_API}${barcode}.json`);
    if (response.data && response.data.product) {
      return response.data.product;
    }
    throw new Error('Product not found in Open Food Facts');
  } catch (error) {
    console.error('Error fetching data from Open Food Facts:', error);
    throw error;
  }
}

async function getWikipediaDescription(productName) {
  try {
    const searchResponse = await axios.get(WIKIPEDIA_API, {
      params: {
        action: 'query',
        list: 'search',
        srsearch: productName,
        format: 'json',
        origin: '*',
      },
    });

    if (searchResponse.data.query.search.length === 0) {
      return 'No Wikipedia description available.';
    }

    const pageTitle = searchResponse.data.query.search[0].title;

    const contentResponse = await axios.get(WIKIPEDIA_API, {
      params: {
        action: 'query',
        prop: 'extracts',
        exintro: true,
        explaintext: true,
        titles: pageTitle,
        format: 'json',
        origin: '*',
      },
    });

    const pages = contentResponse.data.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId].extract || 'No detailed description available.';
  } catch (error) {
    console.error('Error fetching Wikipedia description:', error);
    return 'Error fetching product description.';
  }
}

function calculateSustainabilityScores(productData) {
  const ecoScore = productData.ecoscore_grade || 'unknown';
  const packagingMaterials = productData.packaging_materials || [];

  // Reusability score
  const reusableMaterials = ['glass', 'metal', 'hard plastic'];
  const reusabilityScore = packagingMaterials.some(material => 
    reusableMaterials.some(reusable => material.toLowerCase().includes(reusable))
  ) ? 0.7 : 0.3;

  // Recyclability score
  const recyclableMaterials = ['paper', 'cardboard', 'glass', 'metal', 'plastic'];
  const recyclabilityScore = packagingMaterials.some(material => 
    recyclableMaterials.some(recyclable => material.toLowerCase().includes(recyclable))
  ) ? 0.7 : 0.3;

  // Reducibility score
  let reducibilityScore = 0;
  if (ecoScore === 'a' || ecoScore === 'b') {
    reducibilityScore = 0.8;
  } else if (ecoScore === 'c') {
    reducibilityScore = 0.6;
  } else if (ecoScore === 'd') {
    reducibilityScore = 0.4;
  } else {
    reducibilityScore = 0.2;
  }

  return {
    reusabilityScore,
    recyclabilityScore,
    reducibilityScore
  };
}

export async function getProductInfo(barcode) {
  try {
    const productData = await getOpenFoodFactsData(barcode);
    const sustainabilityScores = calculateSustainabilityScores(productData);
    const wikipediaDescription = await getWikipediaDescription(productData.product_name);

    return {
      name: productData.product_name,
      ...sustainabilityScores,
      reusable: sustainabilityScores.reusabilityScore > 0.5,
      recyclable: sustainabilityScores.recyclabilityScore > 0.5,
      reducible: sustainabilityScores.reducibilityScore > 0.5,
      description: wikipediaDescription,
    };
  } catch (error) {
    console.error('Error fetching product info:', error);
    throw error;
  }
}
