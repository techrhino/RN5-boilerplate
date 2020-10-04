import React, { PureComponent } from 'react'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class About extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Testing</Text>
            </SafeAreaView>
        )
    }
}