import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <section className={this.props.number_section}>
                <div className="section_1">
                    <figure className="profile_content"><img src={this.props.image_profile}/></figure>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.grade}</p>
                    <ul>
                        <li><a href='https://es-la.facebook.com/'> <img src={this.props.facebook_logo} /></a> </li>
                        <li><a href={this.props.instagram_url}> <img src={this.props.instagram_logo} /></a> </li>
                        <li><a href={this.props.skype_url}> <img src={this.props.skype_logo} /></a> </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Card;