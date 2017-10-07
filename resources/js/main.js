import createMap from './components/createMap';

if (
    document.readyState === 'complete' ||
    (
        document.readyState !== 'loading' &&
        !document.documentElement.doScroll
    )
) {
    createMap();
} else {
    document.addEventListener('DOMContentLoaded', createMap);
}
