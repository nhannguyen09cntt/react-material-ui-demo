import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import ExperienceDetail from '../experience-detail/ExperienceDetail';
import SkillDetail from '../skill-detail/SkillDetail';
import SwipeableViews from 'react-swipeable-views';
import './BodyPanel.css';
 
const styles = {
    tabPanelRoot: 'tabPanelRoot',
    tabPanelText: 'tabPanelText',
    tabContainer: 'tabContainer'
}
 
class BodyPanel extends Component {
 
    constructor(props) {
        super(props);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
        };
    }
 
    handleChange = (event, value) => {
        this.setState({ value });
    };
 
    handleChangeIndex = index => {
        this.setState({ value: index });
      };
 
    render() {
        const { value } = this.state;
        const { theme } = this.props;
        return (
            <div className={styles.tabPanelRoot}>
                <AppBar position="static">
                    <Tabs value={value} variant="fullWidth" onChange={this.handleChange}>
                        <Tab className={styles.tabPanelText} label="My Experience" />
                        <Tab className={styles.tabPanelText} label="My Skills" />
                    </Tabs>
                </AppBar>
                <SwipeableViews animateHeight={true} className={styles.tabContainer} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <ExperienceDetail dir={theme.direction}></ExperienceDetail>
                    <SkillDetail dir={theme.direction}></SkillDetail>                    
                </SwipeableViews>
            </div>
        );
    }
}
 
export default withStyles(styles, { withTheme: true })(BodyPanel);
