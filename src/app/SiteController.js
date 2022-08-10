class SiteController {
    //[GET]/
    home(req, res) {
        res.render('home');
    }
    //[GET]/search
    search(req, res) {
        res.render('Search');
    }
}
const siteController = new SiteController();

export { siteController };
