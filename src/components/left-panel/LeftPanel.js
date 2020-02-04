import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import UserDetail from '../user-detail/UserDetail'
import './LeftPanel.css';
 
const styles = {
    drawer: 'drawer',
    drawerPaper: 'drawerPaper'
}
 
class LeftPanel extends Component {
    render() {
        return (
            <div>
                <Drawer className={styles.drawer} variant="permanent" classes={{paper: styles.drawerPaper}} anchor="left">
                    <UserDetail></UserDetail>
                </Drawer>
            </div>
 
        );
    }
}
 
export default LeftPanel;
