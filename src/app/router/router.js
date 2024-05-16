const pushState = history.pushState;
history.pushState = (state, ...rest) => {
    if (typeof history.onpushstate == "function") {
        history.onpushstate({state: state});
    }
    return pushState.apply(history, [state, ...rest]);
};

const switchPage = e => switchPageByPath(e.href)
const switchPageByPath = path => {
    //console.log(localRoutes)
    for(const route of localRoutes) {
        //console.log(path, route.href)
        if (path === route.href) {
            import((`../pages/${route.page}/${route.page}`))
                .then(module => {
                    const outletElement = document.getElementById(outletElementId);
                    for(const node of outletElement.children) {
                        outletElement.removeChild(node);
                    }
                    outletElement.innerHTML = '';
                    outletElement.append(module.default())
            });
        }
    }
}




let localRoutes = [];
const outletElementId = 'outlet'

window.history.onpushstate = e => switchPage(e.state);
window.addEventListener('popstate', e => switchPage(e.state))

const createRoute = (routes) => localRoutes = [...routes];
const loadPage = () => switchPageByPath(location.pathname)

export {createRoute, loadPage}