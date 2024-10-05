# Sustainable Product Scanner

## Description

The Sustainable Product Scanner is an innovative web application designed to empower consumers with information about the sustainability of products they purchase. By leveraging the power of barcode scanning technology and integrating with comprehensive product databases, this app provides users with instant access to crucial sustainability metrics.

Upon scanning a product's barcode, the application retrieves detailed information from the Open Food Facts API. It then processes this data to calculate three key sustainability scores:

1. Reusability: Assesses how easily the product or its packaging can be reused.
2. Recyclability: Evaluates the potential for recycling the product and its components.
3. Reducibility: Measures the product's overall environmental impact and potential for waste reduction.

These scores are presented in an easy-to-understand format, allowing users to make informed decisions about their purchases. Additionally, the app fetches a concise description of the product from Wikipedia, providing context and background information.

Built with React.js, the Sustainable Product Scanner offers a responsive and intuitive user interface. It utilizes Axios for efficient API requests and integrates seamlessly with device cameras for barcode scanning. This project aims to promote sustainable consumption by bridging the information gap between products and their environmental impact.

Whether you're an environmentally conscious consumer, a sustainability researcher, or a curious shopper, the Sustainable Product Scanner provides valuable insights to help you make eco-friendly choices in your everyday purchases.

## Features

- Barcode scanning functionality
- Retrieves product information from Open Food Facts API
- Calculates sustainability scores based on product data
- Fetches product descriptions from Wikipedia
- User-friendly interface for displaying product information and sustainability scores

## Technologies Used

- React.js
- Axios for API requests
- Open Food Facts API for product data
- Wikipedia API for product descriptions

## Installation

1. Clone the repository: git clone https://github.com/yourusername/sustainable-product-scanner.git

2. Navigate to the project directory: cd sustainable-product-scanner

3. Install dependencies: npm install

4. Start the development server: npm start


## Usage

1. Open the application in a web browser.
2. Use your device's camera to scan a product barcode.
3. View the product information, including sustainability scores and description.

## API Reference

- [Open Food Facts API](https://world.openfoodfacts.org/data)
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)

## Contributing

Contributions to improve the Sustainable Product Scanner are welcome. Please follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Open Food Facts for providing comprehensive product data
- Wikipedia for product descriptions
- All contributors who have helped to improve this project
