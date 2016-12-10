import React, { Component } from 'react';
import './App.css';
import { Icon, FABButton, Footer, List, ListItem, Layout, Header, Navigation, Content, Card, CardTitle, CardText, } from 'react-mdl';

var pallet = {
  black: "#343330",
  white: "#F2F4F3",
  lightBlue: "#2660A4",
  darkBlue: "#384E77",
  orange: "#F19953",
}

class SoundCloudEmbed extends React.Component {
  render() {

    var embedStyle = {
      padding: 10,
      marginLeft: 10, 
      marginRight: 10, 
      backgroundColor: pallet["white"],
      width: '80%',
    };

    return (
      <div style={embedStyle}>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + this.props.trackNumber + "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"}></iframe>
      </div>
    )
  }
}

class EpisodeCard extends React.Component {
  render() {
    return (
      <div>
        <Card shadow={0} style={{width: '850px', margin: 'auto', backgroundColor: pallet["white"]}}>
          <CardTitle style={{backgroundColor: pallet["darkBlue"], color: pallet["white"]}}>Episode {this.props.number} - {this.props.title}</CardTitle>
          <SoundCloudEmbed trackNumber={this.props.trackNumber} />
          <CardText>
            {this.props.children}
          </CardText> 
        </Card>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{backgroundColor: pallet["black"], color: pallet["white"]}} title="Reasonable Disagreement" scroll>
            <Navigation>
              <FABButton style={{backgroundColor: pallet["orange"], color: pallet["white"]}}>
                <Icon name="home" />
              </FABButton>
            </Navigation>
        </Header>
        <Content style={{backgroundColor: pallet["white"]}}>
          {/*<Grid noSpacing>
                      <Cell style={{backgroundColor: "#F2F43"}} component={'aside'} className="sidebar-components mdl-shadow--4dp" col={2}>
              <List>
                <ListItem> <a href="">Link</a> </ListItem>
              </List>
            </Cell>
            <Cell col={10}>*/}
              <List>
                <ListItem>
                  <EpisodeCard number="1" title="Cultural Appropriation" trackNumber="290921819">
                    <b>Show Notes</b>
                    <br/>
                    <br/>
                    <i>2:32:</i> Kevin is referring to Brandolini's law: "The amount of energy needed to refute bullshit is an order of magnitude bigger than to produce it."<a href="http://ordrespontane.blogspot.fr/2014/07/brandolinis-law.html">[1]</a> <br/>
                    <i>18:40:</i> The sushi crusade took place at Oberlin.<a href="http://www.theatlantic.com/politics/archive/2015/12/the-food-fight-at-oberlin-college/421401/">[2]</a><br/>
                    <br/>
                    <br/>
                    You can find Rory's position essay <a href="https://docs.google.com/document/d/1gLkSHE-DZAYJPr_3WHASJ2uDIL7Mlaq4JyQYAQPo54s/edit?usp=sharing">here</a>. 
                    Kevin doesn't write position essays yet.
                  </EpisodeCard>
                </ListItem>
              </List>
              {/*</Cell>
          </Grid>*/}
        </Content>
        <Footer style={{backgroundColor: pallet["black"]}}>
        </Footer>
      </Layout>
    );
  }
}

export default App;
