var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:5000';

const test = `<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/css/app/layout.css?v=1715199605950" data-precedence="next_static/css/app/layout.css"/><link rel="stylesheet" href="/_next/static/css/app/page.css?v=1715199605950" data-precedence="next_static/css/app/page.css"/><link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/webpack.js?v=1715199605950"/><script src="/_next/static/chunks/main-app.js?v=1715199605950" async=""></script><script src="/_next/static/chunks/app-pages-internals.js" async=""></script><script src="/_next/static/chunks/app/page.js" async=""></script><title>Create Next App</title><meta name="description" content="Generated by create next app"/><link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/><script src="/_next/static/chunks/polyfills.js" noModule=""></script></head><body class="__className_aaf875"><script src="/_next/static/chunks/webpack.js?v=1715199605950" async=""></script><script>(self.__next_f=self.__next_f||[]).push([0]);self.__next_f.push([2,null])</script><script>self.__next_f.push([1,"1:HL[\"/_next/static/css/app/layout.css?v=1715199605950\",\"style\"]\n2:HL[\"/_next/static/css/app/page.css?v=1715199605950\",\"style\"]\n0:D{\"name\":\"rQ\",\"env\":\"Server\"}\n"])</script><script>self.__next_f.push([1,"3:I[\"(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js\",[\"app-pages-internals\",\"static/chunks/app-pages-internals.js\"],\"\"]\n5:I[\"(app-pages-browser)/./node_modules/next/dist/client/components/client-page.js\",[\"app-pages-internals\",\"static/chunks/app-pages-internals.js\"],\"ClientPageRoot\"]\n6:I[\"(app-pages-browser)/./src/app/page.tsx\",[\"app/page\",\"static/chunks/app/page.js\"],\"default\"]\n8:I[\"(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js\",[\"app-pages-internals\",\"static/chunks/app-pages-internals.js\"],\"\"]\n9:I[\"(app-pages-browser)/./node_modules/next/dist/client/components/render-from-template-context.js\",[\"app-pages-internals\",\"static/chunks/app-pages-internals.js\"],\"\"]\nc:I[\"(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js\",[\"app-pages-internals\",\"static/chunks/app-pages-internals.js\"],\"\"]\n4:D{\"name\":\"\",\"env\":\"Server\"}\n7:D{\"name\":\"RootLayout\",\"env\":\"Server\"}\na:D{\"name\":\"NotFound\",\"env\":\"Server\"}\na:[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"}],[\"$\",\"div\",null,{\"style\":{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"},\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}}],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"},\"children\":\"404\"}],[\"$\",\"div\",null,{\"style\":{\"display\":\"inline-block\"},\"children\":[\"$\",\"h2\",null,{\"style\":{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0},\"children\":\"This page co"])</script><script>self.__next_f.push([1,"uld not be found.\"}]}]]}]}]]\n7:[\"$\",\"html\",null,{\"lang\":\"en\",\"children\":[\"$\",\"body\",null,{\"className\":\"__className_aaf875\",\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L9\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$a\",\"notFoundStyles\":[],\"styles\":[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/app/page.css?v=1715199605950\",\"precedence\":\"next_static/css/app/page.css\",\"crossOrigin\":\"$undefined\"}]]}]}]}]\nb:D{\"name\":\"\",\"env\":\"Server\"}\nd:[]\n0:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/app/layout.css?v=1715199605950\",\"precedence\":\"next_static/css/app/layout.css\",\"crossOrigin\":\"$undefined\"}]],[\"$\",\"$L3\",null,{\"buildId\":\"development\",\"assetPrefix\":\"\",\"initialCanonicalUrl\":\"/\",\"initialTree\":[\"\",{\"children\":[\"__PAGE__\",{}]},\"$undefined\",\"$undefined\",true],\"initialSeedData\":[\"\",{\"children\":[\"__PAGE__\",{},[[\"$L4\",[\"$\",\"$L5\",null,{\"props\":{\"params\":{},\"searchParams\":{}},\"Component\":\"$6\"}]],null],null]},[\"$7\",null],null],\"couldBeIntercepted\":false,\"initialHead\":[false,\"$Lb\"],\"globalErrorComponent\":\"$c\",\"missingSlots\":\"$Wd\"}]]\n"])</script><script>self.__next_f.push([1,"b:[[\"$\",\"meta\",\"0\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"$\",\"meta\",\"1\",{\"charSet\":\"utf-8\"}],[\"$\",\"title\",\"2\",{\"children\":\"Create Next App\"}],[\"$\",\"meta\",\"3\",{\"name\":\"description\",\"content\":\"Generated by create next app\"}],[\"$\",\"link\",\"4\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\",\"type\":\"image/x-icon\",\"sizes\":\"16x16\"}]]\n4:null\n"])</script></body></html>`

describe("API test suite", () => {
    describe("GET frontend site", ()=> {
        it("returns status code 200 and body lenght should be proper", function(done) {
            request.get(`http://frontend:3000`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(body.length).toBeGreaterThan(1000);
                done();
            });
        });
    });
    describe("GET /transactions", ()=> {
        it("returns status code 200 and proper number of transactions", function(done) {
            request.get(`${base_url}/transactions`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(Object.keys(JSON.parse(body)).length).toBe(14);
                done();
            });
        });
    });
    describe("GET /transactions/averageValue", () => {
        it("return proper average transaction value", function(done) {
            request.get(`${base_url}/transactions/averageValue`, (error, response, body) => {
                expect(body).toBe(JSON.stringify(
                    {
                        avg: "53304.142857142857"
                    }));
                done();
            });
        });
    });
    describe("GET /transaction/:n", () => {
        it("should return selected n-th row", function(done) {
            request.get(`${base_url}/transaction/3`, (error, response, body) => {
                expect(body).toBe(JSON.stringify(
                    {
                        transaction_id: 3,
                        transaction_value: 65776
                    }));
                done();
            });
        });
    });
});