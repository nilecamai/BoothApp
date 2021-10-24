import React from 'react';
import { StyleSheet, Text, View, ScrollView, PlatformColor, Platform, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, Heading, Paragraph } from '../components/Headings';
import Styles from '../components/Styles';
import Navbar from '../components/Navbar';

import StyledButton from '../components/StyledButton';

export default function EventView(props) {
    if (props.route.params.event === null || props.route.params.event === undefined) {
        return (<Text>uh oh no event passed in</Text>);
    }
    let event = props.route.params.event;
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
                        <Image source={event.image} style={Styles.image} />
                        <Title title={event.name + " (" + event.category + ")"} />
                        <Paragraph text={event.description} />
                        <Title title={"Booths:"} />
                        {generateBooths(event, props.navigation)}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function generateBooths(event, navigation) {
    return event.booths.map((booth, i) =>
        <View style={Styles.smallMargin} key={i}>
            <Heading heading={booth.name} />
            <Paragraph text={booth.description} />
            {Platform.OS === "web" ?
                <StyledButton onPress={ () => {navigation.navigate('BoothView', { booth: booth });}} >
                    View
                </StyledButton> :
                <Button
                    onPress={ () => {navigation.navigate('BoothView', { booth: booth });}}
                    title={"View"}
                    key={i}
                />
            }

        </View>
    );
}
