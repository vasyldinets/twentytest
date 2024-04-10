import { render } from '@wordpress/element';
import App from './App';

if (document.getElementById('twenty-products-settings')) {
  render(<App/>, document.getElementById('twenty-products-settings'));
}
