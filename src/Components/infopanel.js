import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats'
import Countries from './Countries'


export default function InfoPanel({currentScreen}) {

    if(currentScreen === 0)
        return <GlobalStats />
    else if(currentScreen === 1)
        return <Countries />
    else return <GlobalStats />
}
