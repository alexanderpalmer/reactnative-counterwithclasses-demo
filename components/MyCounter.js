import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class MyCounter extends Component {
    state = { counter: parseInt(this.props.start) };

    press = () => {
        const { end } = this.props;
        if (this.state.counter < parseInt(end)) {
            this.setState({
                counter: this.state.counter + 1,
            });
        }
    };

    render() {
        const { end } = this.props;
        const { counter } = this.state;

        return (
            <View>
                <Text style={styles.counter}>{counter}</Text>
                <Button
                    title="Klick mich"
                    onPress={this.press}
                    disabled={counter < parseInt(end) ? false : true}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    counter: {
        textAlign: "center",
        fontSize: 28,
        color: "red",
        paddingVertical: 20
    },
});