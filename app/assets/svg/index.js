import React from 'react'
import Volume from './volume.svg'
import More from './more.svg'
import Mic from './mic.svg'
import Camera from './camera.svg'
import Record from './record.svg'
import Call from './call.svg'

export const VolumeIcon = ({ size = 33, color = '#fff' }) => (
    <Volume width={size} height={size} style={{ color }} />
)

export const MoreIcon = ({ size = 33, color = '#fff' }) => (
    <More width={size} height={size} style={{ color }} />
)

export const MicIcon = ({ size = 33, color = '#fff' }) => (
    <Mic width={size} height={size} style={{ color }} />
)

export const CameraIcon = ({ size = 33, color = '#fff' }) => (
    <Camera width={size} height={size} style={{ color }} />
)

export const RecordIcon = ({ size = 20, color = '#ff0000' }) => (
    <Record width={size} height={size} style={{ color }} />
)

export const CallIcon = ({ size = 20, color = '#fff' }) => (
    <Call width={size} height={size} style={{ color }} />
)
