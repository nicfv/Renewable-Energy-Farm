import React from 'react'; 
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props) 

    }


    render() {
        return( 
            <div class="home">
                <header class="masthead">
                    <div class="container position-relative px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">
                                <div class="page-heading">
                                    <h1>Welcome to REDC</h1>
                                    <span class="subheading">Reuseable Energy Data Collection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="mb-4">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">
                                <p>Welcome to the Renewable Energy Farm predictor. This collaboration comes from a group of UC Davis students with diverse background in order to help create renewable energy data easier to access. </p>
                                <p>The goal of this project is to generate predictions of future wind speeds and their ideal directions. We want to predict changes in wind direction and wind speeds in the near future using machine learning. By predicting the future ideal conditions for wind turbines there will be an energy use reduction for turbines that are able to freely rotate as they use energy to rotate. This will allow them to decrease the amount of times they need to change their direction for wind. Another additional benefit is predicting models for potential wind turbines to be built in the near future. Figuring out how to predict these models will further the development of wind turbines throughout the US, in order to lower carbon emissions overall.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )

    }

}

export default Home; 