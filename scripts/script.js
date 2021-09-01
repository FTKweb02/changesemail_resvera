var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            images: this.props.images,
            active: this.props.active,
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
                    ""), /*#__PURE__*/


                React.createElement(ReactCSSTransitionGroup, {
                        transitionName: this.state.direction
                    },
                    this.generateItems()), /*#__PURE__*/

                React.createElement("div", { className: "arrow", onClick: this.rightClick }, /*#__PURE__*/
                    "")));


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

                    React.createElement("h3", { className: "nibba" }, this.props.id)
                ])));
    }
}


var textos = ["Faciales", "Tecnologías", "Medicina Estética", "Mesoterapia"];
var imagenes = ["./img/CarFaci.png", "./img/CarTec.png", "./img/carME.png", "./img/CarMeso.png"]
var enlace = ["./faciales.html", "./tecnologias.html", "./medicina.html", "./mesoterapia.html"]
ReactDOM.render( /*#__PURE__*/ React.createElement(Carousel, { items: textos, images: imagenes, links: enlace, active: 0 }), document.getElementById('app'));