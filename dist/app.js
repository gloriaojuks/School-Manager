"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./routes/user.route");
const admin_route_1 = require("./routes/admin.route");
const news_route_1 = require("./routes/news.route");
const mongoose_1 = require("./exports/mongoose");
const session = require('express-session');
const path = __importStar(require("path"));
const morgan = require("morgan");
const app = express_1.default();
const port = 5000 || process.env.PORT;
mongoose_1.mongoose.connect('mongodb://localhost/SchoolManagment', { useNewUrlParser: true, autoIndex: false })
    .then(() => {
    console.log('Mongodb Connected');
})
    .catch((err) => {
    console.log(err);
});
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path.join(__dirname, 'pages')));
app.use('/js', express_1.default.static(path.join(__dirname, 'static/js')));
app.use('/css', express_1.default.static(path.join(__dirname, 'static/css')));
app.use(morgan('combined'));
app.all('/', (req, res) => {
    res.render('index');
});
app.use('/api/user', user_route_1.router);
app.use('/api/admin', admin_route_1.router);
app.use('/api/news', news_route_1.router);
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
