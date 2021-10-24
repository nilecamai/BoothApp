import React from 'react';
import { StyleSheet, Text, View, ScrollView, PlatformColor, Platform, Button, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import { Title, Heading, Paragraph } from '../components/Headings';
import Styles from '../components/Styles';
import Navbar from '../components/Navbar';

import market from '../../assets/market.jpg';

const events = [
    {
        name: "Redmond Farmer's Market ",
        description: "Although Redmond continues to grow and change, our market remains unique in that it is able to offer a gathering place for local farmers and artisans to provide quality products to our customers. Not only can one shop, but you can actually visit with each vendor face to face.",
        location: "9900 Willows Rd, Redmond, WA 98052",
        date: "2021-10-30",
        category: "Market",
        organizer: "Martha Smart",
        image: require("../../assets/farm-min.jpg"),
        booths: [
            {
                name: "Molly's Macaroons",
                description: "Take a trip to France with these delicious macaroons created from a top secret family recipe! Our favorites are vanilla and pistachio!",
                items: ["Vanilla Macaroons", "Pistachio Macaroons", "Blueberry Macaroons", "Lemon Macaroons"],
                image: "https://drive.google.com/file/d/1weSYPes1g-TkLrD4ZdORON0Jl_RYASlb/view?usp=sharing",
                likes: "14"
            },
            {
                name: "Salma's Salsa",
                description: "Try some delcious homemade salsa made fresh with ingredients from our faily farm!",
                items: ["Mango Salsa", "Spicy Habanero Salsa", "Homemade Tortilla Chips"],
                image: "https://drive.google.com/file/d/1weSYPes1g-TkLrD4ZdORON0Jl_RYASlb/view?usp=sharing",
                likes: "21"
            }
        ]
    },
    {
        name: "DubHacks Hackathon",
        description: "At DubHacks '21, attendees bring their individual spaces and ideas together while reconnecting with old friends and meeting online ones for the first time. We hope to empower our students to build impactful tech solutions, foster a community for learning and experimentation, and seek to advance diversity and equity in the tech industry.",
        location: "Virtual",
        date: "2021-10-23",
        category: "Technology",
        organizer: "Trinity Cho",
        image: require("../../assets/dubhacks-min.jpg"),
        booths: [
            {
                name: "Stocks and Stacks",
                description: "Interested in growing your investment portfolio? We're a company of self-made millionaires who are looking to help others make it big in the stock market. Check out our booth at DubHacks!",
                items: [],
                image: "https://drive.google.com/file/d/1K25peZfXMeZh-URteMbHRYWcNFcys6GQ/view?usp=sharing",
                likes: "25"
            },
            {
                name: "Community Coders",
                description: "We are a group of volunteers passionate about supporting our community by teaching youth how to code via free after school care programs!",
                items: [],
                image: "https://drive.google.com/file/d/154C4SKHfs4wGErfPD3lMqsNqYO-3QQHz/view?usp=sharing",
                likes: "19"
            },
            {
                name: "BEEducated",
                description: "Interested in building the future? Visit our Dubhacks booth to learn more about how you can join our team of engineers in building a novel sensor that will help beekeepers detect the onset of CCD!",
                items: [],
                image: "https://drive.google.com/file/d/1MoFdMsX_dzmx8fEQUPVsLu4tZyKBJImd/view?usp=sharing",
                likes: "30"
            }
        ]
    },
    {
        name: "Plato's Closet Pop Up",
        description: "Plato’s Closet buys and sells gently used clothes, shoes and accessories, so you can recycle the items you no longer wear and get paid on the spot. We buy styles for all seasons, all day, every day, with no appointment necessary.",
        location: "14125 NE 20th St D, Bellevue, WA 98007",
        date: "2021-11-17",
        category: "Clothing",
        organizer: "Ashley Smith",
        image: require("../../assets/clothes-min.jpg"),
        booths: [
            {
                name: "Fatima's Fire Fits",
                description: "Find the ultimate sustainable fashion fit that won't hurt your wallet! Check out our selection of graphic tees and jeans and over 100 accessories!",
                items: ["Graphic Tees", "Tanktops", "Monochromatic Tees", "Hoodies", "Mom Jeans", "Boot Cut Jeans", "Jeggings", "Earrings", "Rings", "Necklaces", "Anklets", "Chains"],
                image: "https://drive.google.com/file/d/1jB5BdJcImJXcHalBs52krM8OwWN-bDLV/view?usp=sharing",
                likes: "10"
            },
            {
                name: "Juana's Jewelry",
                description: "Discover our highly curated selection of hand-crafted earrings, necklaces, and rings made with real 4 karat gold! No piercings? No worries! We also sell fake clip ons that will help you stylize your wardrobe!",
                items: ["Earrings", "Necklaces", "Rings"],
                image: "https://drive.google.com/file/d/1EBXGhyEHYjH-J-pvpGRmOW189Q9IkTGs/view?usp=sharing",
                likes: "21"
            }
        ]
    }
];

export default function HomeView(props) {
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView style={Styles.scrollview} showsVerticalScrollIndicator={false}>
                <Navbar navigation={props.navigation}/>
                <View style={Styles.center}>
                    <View style={Styles.limitedSizeContainer}>
                        <View style={styles.pictureFrame}>
                            <Image style={styles.picture} source={market}/>
                            <View style={styles.pictureOverlay}>
                                <Text style={styles.pictureLabel}>
                                    Discover local.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Title title='Ready to explore?' />
                            <Paragraph text='Booth promotes and facilitates interactions within communities by providing them with the opportunity to either host or attend local pop-up events. Find out about events in your area:' />
                        </View>
                        <ScrollView horizontal={true} style={Styles.webPadded}>
                            {generateCards(props.navigation)}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

function generateCards(navigation) {
    return events.map((event, i) =>
        <Card
            image={event.image}
            name={event.name}
            location={event.location}
            onclick={() => {
                navigation.navigate('EventView', { event: event });
            }}
            key={i}
        />
    );
}

const styles = StyleSheet.create({
    textContainer: {
        marginVertical: 16,
    },
    pictureFrame: {
        marginTop: 8,
        height: 250,
        borderRadius: 20,
        width: '100%',
    },
    picture: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    pictureOverlay: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    pictureLabel: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 90,
        fontFamily: 'VarelaRound_400Regular',
        fontSize: 24,
        backgroundColor: '#ffffffaa',
        padding: 20,
    }
});