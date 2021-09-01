var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            images: this.props.images,
            active: this.props.active,
            stars: this.props.stars,
            tiempos: this.props.tiempos,
            links: this.props.links,
            direction: ''
        };

        this.rightClick = this.moveRight.bind(this);
        this.leftClick = this.moveLeft.bind(this);
    }

    generateItems() {
        var items = [];
        var level;
        console.log(this.state.active);
        for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
            var index = i;
            if (i < 0) {
                index = this.state.items.length + i;
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length;
            }
            level = this.state.active - i;
            items.push( /*#__PURE__*/ React.createElement(Item, {
                key: index,
                id: this.state.items[index],
                image: this.state.images[index],
                stars: this.state.stars[index],
                tiempo: this.state.tiempos[index],
                link: this.state.links[index],
                level: level
            }));
        }
        return items;
    }

    moveLeft() {
        var newActive = this.state.active;
        newActive--;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        });

    }

    moveRight() {
        var newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        });

    }

    render() {
        return /*#__PURE__*/ (
            React.createElement("div", { id: "carousel", className: "noselect" }, /*#__PURE__*/
                React.createElement("div", { className: "arrow arrow-right", onClick: this.leftClick }, /*#__PURE__*/
                    React.createElement("a", { className: "carousel_prev" }, "❮")), /*#__PURE__*/
                React.createElement(ReactCSSTransitionGroup, {
                        transitionName: this.state.direction
                    },
                    this.generateItems()), /*#__PURE__*/

                React.createElement("div", { className: "arrow arrow-left", onClick: this.rightClick }, /*#__PURE__*/ React.createElement("a", { className: "carousel_next" }, "❯"))));


    }
}


class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level
        };

    }

    render() {
        const className = 'item level' + this.props.level;
        return /*#__PURE__*/ (
            React.createElement("div", { className: className },
                React.createElement("div", { className: "carousel_inner" }, [

                    React.createElement("a", { href: this.props.link },
                        React.createElement("img", { src: this.props.image })),

                    React.createElement("h3", { className: "nibba" }, this.props.id),
                    React.createElement("div", { className: "carousel_info" },
                        React.createElement("div", { style: { display: "flex", "margin-bottom": "5%" } },
                            React.createElement("img", { style: { height: "15px", with: "85px" }, src: this.props.stars }, null),
                            React.createElement("p", {}, this.props.tiempo),
                        ),
                        this.props.id === "Baby Botox" ? (
                            React.createElement("div", { style: { display: "flex" } },
                                React.createElement("img", { style: { height: "15px", with: "85px" }, src: "./img/5starsa.svg" }, null),
                                React.createElement("p", {}, "Luxe")
                            )
                        ) :

                        this.props.id === "Baby Preventivo" ? (
                            React.createElement("div", { style: { display: "flex" } },
                                React.createElement("img", { style: { height: "15px", with: "85px" }, src: "./img/5starsa.svg" }, null),
                                React.createElement("p", {}, "Luxe")
                            )
                        ) :

                        this.props.id === "Baby Renuévate" ? (
                            React.createElement("div", { style: { display: "flex" } },
                                React.createElement("img", { style: { height: "15px", with: "85px" }, src: "./img/5starsa.svg" }, null),
                                React.createElement("p", {}, "Luxe")
                            )
                        ) :
                        this.props.id === "Baby Relleno" ? (
                            React.createElement("div", { style: { display: "flex" } },
                                React.createElement("img", { style: { height: "15px", with: "85px" }, src: "./img/5starsa.svg" }, null),
                                React.createElement("p", {}, "Luxe")
                            )
                        ) :
                        this.props.id === "Relleno Preventivo" ? (
                            React.createElement("div", { style: { display: "flex" } },
                                React.createElement("img", { style: { height: "15px", with: "85px" }, src: "./img/5starsa.svg" }, null),
                                React.createElement("p", {}, "Luxe")
                            )
                        ) :
                        this.props.id === "Relleno Renuévate" ? (
                            React.createElement("div", { style: { display: "flex" } },
                                React.createElement("img", { style: { height: "15px", with: "85px" }, src: "./img/5starsa.svg" }, null),
                                React.createElement("p", {}, "Luxe")
                            )
                        ) :
                        null
                    )
                ])));
    }
}

var textos = ["Baby Preventivo", "Baby Botox", "Botox/Relleno Renuévate", "Botox/Relleno Preventivo", "Baby Botox/Relleno", "Relleno Renuévate", "Relleno Preventivo", "Baby Relleno", "Baby Renuévate"]
var imagenes = ["./img/ME2.png", "./img/ME2.png", "./img/ME3.png", "./img/ME3.png", "./img/ME3.png", "./img/ME1.png", "./img/ME1.png", "./img/ME1.png", "./img/ME2.png"]
var stars = ["./img/2starsa.svg", "./img/2starsa.svg", " ", " ", " ", "./img/2starsa.svg", "./img/2starsa.svg", "./img/2starsa.svg", "./img/2starsa.svg"]
var tiempos = ["Básico", "Básico", "", "", "", "Básico", "Básico", "Básico", "Básico"]
var enlace = ["./", "./", "./", "./", "./", "./", "./", "./", "./"]
ReactDOM.render( /*#__PURE__*/ React.createElement(Carousel, { items: textos, images: imagenes, stars: stars, tiempos: tiempos, links: enlace, active: 0 }), document.getElementById('app'));