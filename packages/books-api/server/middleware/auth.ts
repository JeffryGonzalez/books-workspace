export default defineEventHandler(event => {
    // Fake for now.
    event.context.user = { sub: 'web' };
})