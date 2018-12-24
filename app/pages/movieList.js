/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    FlatList,
    ActivityIndicator,
    TouchableHighlight,
    StatusBar,
    Button
} from 'react-native';
import {connect} from "react-redux"
import {getData,changeLoading} from "../actions/movieList/index";

StatusBar.setHidden(true)

class MovieList extends Component {
    static navigationOptions = {
        tabBarLabel: '列表页'
    };
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.getData();
    }

    goDetail = (id) => {
        this.props.navigation.navigate('MovieDetail',{"id":id})

    }

    renderMovieList = (movie) => {
        return (
            <TouchableHighlight
                underlayColor="rgba(34,26,38,0.1)"
                onPress={() => this.goDetail(movie.item.year)}>
                <View style={styles.items}>
                    <View style={styles.itemsImages}>
                        <Image
                            style={styles.image}
                            source={{uri: movie.item.images.large}}
                        ></Image>
                    </View>
                    <View style={styles.itemsContent}>
                        <Text style={styles.itemHeader}>{movie.item.title}</Text>
                        <Text style={styles.itemMeta}>{movie.item.original_title}({movie.item.year})</Text>
                        <Text style={styles.redText}>{movie.item.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        let {movieList} = this.props
        if (movieList.movieList.length == 0) {
            return (
                <View style={styles.loading}>
                    {movieList.loading ? <Text>正在加载....</Text> : <Button onPress={this.props.getNewData} title={"获取数据"}></Button>}
                    {movieList.loading ? <ActivityIndicator size="large" color="#00ff00"/> : <Text>{movieList.errorMsg}</Text>}

                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <StatusBar></StatusBar>
                    <FlatList data={movieList.movieList} keyExtractor={movie => movie.title}
                              renderItem={this.renderMovieList}></FlatList>
                </View>

            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae7ff',
        marginTop: 10
    },
    loading: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: "center",
        fontSize: 20
    },
    items: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        borderColor: "#f4f4f4",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    itemsImages: {
        marginRight: 30
    },
    image: {
        width: 100,
        height: 100,
    },
    itemsContent: {
        flex: 1,
        justifyContent: 'space-around',
    },
    itemHeader: {
        fontSize: 16,
        color: "#000"
    },
    itemMeta: {
        fontSize: 14,
        color: "rgba(0,0,0,0.6)"
    },
    redText: {
        color: "red"
    },

});

const mapStateToProps = (state) => {
    console.log("state start----------------")
    console.log(state)
    console.log("state end----------------")
    return {
        movieList: state.movieList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNewData: () => {
            dispatch(changeLoading(true))
            dispatch(getData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)