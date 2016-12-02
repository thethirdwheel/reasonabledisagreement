import React, { Component } from 'react';
import './App.css';
import { Footer, Grid, Cell, List, ListItem, Layout, Header, Navigation, Content, Card, CardTitle, CardText, } from 'react-mdl';

var SoundCloudEmbed = React.createClass({
  render : function() {

    var embedStyle = {
      padding: 10,
      marginLeft: 10, 
      marginRight: 10, 
      backgroundColor: "#F2F4F3",
      width: 800,
    };

    return (
      <div style={embedStyle}>
        <iframe width="800" height="150" scrolling="no" frameBorder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + this.props.trackNumber + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}></iframe>
      </div>
    )
  }
});

var EpisodeCard = React.createClass({
  render : function() {
    return (
      <div>
        <Card shadow={0} style={{width: '850px', margin: 'auto', backgroundColor: "#F2F4F3"}}>
          <CardTitle style={{backgroundColor: '#F19953', color: '#343330'}}>Episode {this.props.number} - {this.props.title}</CardTitle>
          <SoundCloudEmbed trackNumber={this.props.trackNumber} />
          <CardText>
            {this.props.children}
          </CardText> 
        </Card>
      </div>
    )
  }
});

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{backgroundColor: "#343330", color: "#F2F43"}}title="Reasonable Disagreement" scroll>
          <Navigation>
            <a href="">Link</a>
          </Navigation>
        </Header>
        <Content>
          <Grid noSpacing>
            <Cell style={{backgroundColor: "#F2F43"}} component={'aside'} className="sidebar-components mdl-shadow--4dp" col={2}>
              <List>
                <ListItem> <a href="">Link</a> </ListItem>
              </List>
            </Cell>
            <Cell col={10}>
              <List>
                <ListItem>
                  <EpisodeCard number="1" title="Cultural Appropriation" trackNumber="290921819">
                    You can find Rory's position essay <a href="https://docs.google.com/document/d/1gLkSHE-DZAYJPr_3WHASJ2uDIL7Mlaq4JyQYAQPo54s/edit?usp=sharing">here</a>. 
                    Kevin doesn't write position essays yet.
                  </EpisodeCard>
                </ListItem>
              </List>
            </Cell>
          </Grid>
        </Content>
        <Footer style={{backgroundColor: "#343330"}}>
        </Footer>
      </Layout>
    );
  }
}

export default App;
