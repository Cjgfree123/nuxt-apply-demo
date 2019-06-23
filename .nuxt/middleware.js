const middleware = {}

middleware['layout'] = require('../middleware/layout.js');
middleware['layout'] = middleware['layout'].default || middleware['layout']

middleware['page'] = require('../middleware/page.js');
middleware['page'] = middleware['page'].default || middleware['page']

middleware['router'] = require('../middleware/router.js');
middleware['router'] = middleware['router'].default || middleware['router']

export default middleware
