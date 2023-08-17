const proxy = fontProxy()

const fontColorHandler = (event) => {
    proxy.value = event.target.value;
};

export default fontColorHandler;