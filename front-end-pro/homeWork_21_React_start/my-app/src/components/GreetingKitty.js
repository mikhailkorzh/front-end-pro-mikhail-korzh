import React from 'react';
import Clock from 'react-live-clock';

export class MyClock extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Kiev'} />
            </React.Fragment>
        )
    }
}

export class GreetingKitty extends React.Component {
    function

    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }

        this.onCardClick = this.onCardClick.bind(this);
    }

    onCardClick() {
        this.setState({clickCount: this.state.clickCount + 1})
    }

    formatDate(date) {
        return date.toLocaleDateString();
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.onCardClick}>
                    <img src={this.props.author.avatarUrl} alt='logo'/>
                    <p>{this.props.author.avatarName}</p>
                    {this.state.clickCount}
                    <div className="Clock">
                        <MyClock/>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


