import React from 'react';
import { StyleSheet, Text, View, ScrollView, PlatformColor, Platform, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, Heading, Paragraph } from '../components/Headings';
import StyledButton from '../components/StyledButton';
import Styles from '../components/Styles';
import Navbar from '../components/Navbar';

export default function BoothView(props) {
    if (props.route.params.booth === null || props.route.params.booth === undefined) {
        return (<Text>uh oh no booth passed in</Text>);
    }
    let booth = props.route.params.booth;
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView style={Styles.scrollview} showsVerticalScrollIndicator={false}>
            <Navbar navigation={props.navigation}/>
                <View style={Styles.center}>
                    <View style={Styles.limitedSizeContainer}>
                        {Platform.OS === "web" ?
                            <StyledButton onPress={() => props.navigation.goBack()} secondary={true} >
                                Go back
                            </StyledButton> :
                            <Button onPress={() => props.navigation.goBack()} title="Go back" />
                        }
                        <Title title={booth.name} />
                        <Heading heading={booth.description} />
                        {booth.items.length !== 0 ? <Title title={"Items:"} /> : ""}
                        {generateItems(booth)}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function generateItems(booth) {
    return booth.items.map((item, i) =>
        <View style={Styles.smallMargin} key={i}>
            <Heading heading={item} />
        </View>
    );
}
