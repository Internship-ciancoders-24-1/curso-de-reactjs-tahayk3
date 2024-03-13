import React from "react";
import { Link } from 'react-router-dom';

import '../components/styles/Badges.css';

import confLogo from '../images/logo.webp';
import Badge from "../components/Badge";
import BadgesList from "../components/BadgesList";


class Badges extends React.Component {

    state={
        data: [
            {
              id: '456456',
              firstName: 'Cristina',
              lastName: 'Magadán',
              email: 'correoReal@gmail.com',
              jobTitle: 'Legacy Brand Director',
              twitter: 'Nissaxter',
              avatarUrl:
                'https://static-cdn.jtvnw.net/jtv_user_pictures/f01671f9-b022-42eb-9be1-9756a9e17bb8-profile_image-300x300.png',
            },
            {
              id: '678678',
              firstName: 'MissMikkaa',
              lastName: 'Kpi',
              email: 'correoReal@gmail.com',
              jobTitle: 'Human Research Architect',
              twitter: 'MissMikkaa',
              avatarUrl:
                'https://static-cdn.jtvnw.net/jtv_user_pictures/7032982d-befa-41be-a732-8cf99279f502-profile_image-300x300.png',
            },
            {
              id: '34345345',
              firstName: 'Samuel',
              lastName: 'De Luque',
              email: 'correoReal@gmail.com',
              jobTitle: 'National Markets Officer',
              twitter: 'Vegetta777',
              avatarUrl:
                'data:image/jpeg;base64,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',
            },
          ],
    }
    render(){
        return (
            <React.Fragment>
                <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                    <img
                        className="Badges_conf-logo"
                        src={confLogo}
                        alt="Conf Logo"
                    />
                    </div>
                </div>
                </div>
    
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            NeW Badge 
                        </Link>
                    </div>

                    <BadgesList badges={this.state.data} />

                    

                </div>
            
          </React.Fragment>
        )
    }
}

export default Badges;