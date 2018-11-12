export const state = {
    auth: {
        status: 'NOT_STARTED',
        accessToken: null,
        refreshToken: null,
    },
    userProfile: {
        status: 'NOT_STARTED',
        loading: false,
        country: null,
        display_name: null,
        email: null,
        external_urls: {},
        followers: {},
        href: null,
        id: null,
        images: [],
        product: null,
        type: null,
        uri: null,
    },
    savedAlbums: {
        data: {},
        status: 'NOT_STARTED',
        error: {},
    }
};
