import path from 'path';
import { fileURLToPath } from 'url';

const configViewEngine = (app) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // app.set('views', path.join('./dirname', '..', 'views')); // <-- Add '..'
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs');
};

export default configViewEngine;
 
// Notice I added '..' to path.join(__dirname, '..', 'views'), which means:

// go up one level (from config/ to src/),

// then look for views.