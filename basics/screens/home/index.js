import { Text, View ,FlatList,StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import User from './User'
import React, { Component } from 'react'

const renderUser=({item})=><User item={item} />

 class Home extends Component {
    componentDidMount(){
        const {fetchDataAll}=this.props;
        fetchDataAll()
    }
  render() {
    const {data}=this.props;
    if (data) {
        console.log(data);
    }
    return (
      
        <View style={styles.container}>
            <Text style={{fontSize:25}}>
                User  Email Details
            </Text>

            <FlatList
            data={data}
            renderItem={renderUser}
            />
        </View>
        
      
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
const mapStateToProps=state=>{
    return {
        data:state.app.data,
    }
}

const mapDispatchToProps={
    fetchDataAll
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)