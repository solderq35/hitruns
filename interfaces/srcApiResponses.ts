export interface ISrcResponse {
    data: Data
}
export interface Data {
    weblink: string
    game: string
    category: string
    level?: null
    platform?: null
    region?: null
    emulators?: null
    "video-only": boolean
    timing: string
    values: Values
    runs?: RunsEntity[] | null
    links?: LinksEntity[] | null
    players: Players
    platforms: Platforms
}

export type Values = Record<string, string>

export interface RunsEntity {
    place: number
    run: Run
}
export interface Run {
    id: string
    weblink: string
    game: string
    level?: null
    category: string
    videos: Videos
    comment: string
    status: Status
    players?: PlayersEntity[] | null
    date: string
    submitted: string
    times: Times
    system: System
    splits?: null
    values: Values
}
export interface Videos {
    links?: LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube[] | null
}
export interface LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube {
    uri: string
}
export interface Status {
    status: string
    examiner: string
    "verify-date": string
}

export interface PlayersEntity {
    rel: string
    id: string
    uri: string
}
export interface Times {
    primary: string
    primary_t: number
    realtime: string
    realtime_t: number
    realtime_noloads: string
    realtime_noloads_t: number
    ingame?: null
    ingame_t: number
}
export interface System {
    platform: string
    emulated: boolean
    region?: null
}

export interface LinksEntity {
    rel: string
    uri: string
}
export interface Players {
    data?: DataEntity[] | null
}
export interface DataEntity {
    rel: string
    id: string
    names: Names
    pronouns?: string | null
    weblink: string
    "name-style": NameStyle
    role: string
    signup: string
    location: Location
    twitch?: LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube1 | null
    hitbox?: null
    youtube?: LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube2 | null
    twitter?: LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube3 | null
    speedrunslive?: null
    assets: Assets
    links?: LinksEntity[] | null
}
export interface Names {
    international: string
    japanese?: null
}
export interface NameStyle {
    style: string
    "color-from": ColorFromOrColorTo
    "color-to": ColorFromOrColorTo
}
export interface ColorFromOrColorTo {
    light: string
    dark: string
}
export interface Location {
    country: CountryOrRegion
    region?: CountryOrRegion1 | null
}
export interface CountryOrRegion {
    code: string
    names: Names
}
export interface CountryOrRegion1 {
    code: string
    names: Names
}
export interface LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube1 {
    uri: string
}
export interface LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube2 {
    uri: string
}
export interface LinksEntityOrIconOrImageOrTwitchOrTwitterOrYoutube3 {
    uri: string
}
export interface Assets {
    icon: IconOrImage
    image: IconOrImage
}
export interface IconOrImage {
    uri?: string | null
}
export interface Platforms {
    data?: DataEntity1[] | null
}
export interface DataEntity1 {
    id: string
    name: string
    released: number
    links?: LinksEntity[] | null
}
