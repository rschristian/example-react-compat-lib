import register from 'preact-custom-element';
import { MyComponent } from '../../react/dist/example-lib-react.js'

register(MyComponent, 'x-component', ['name']);
