class NewsController {
    //[GET]/news
    index(req, res) {
        res.render('news');
    }
    //[GET]/news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!');
    }
}
const newsController = new NewsController();

export { newsController };
