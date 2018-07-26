'use strict'

const Image = use('App/Models/Image')
const Property = use('App/Models/Property')
const Helpers = use('Helpers')

class ImageController {
    async store({ request }) {
        const property = await Property.findOrFail(params.id)

        const images = request.file('image', {
            types: ['image'],
            size: '5mb'
        })

        await images.moveAll(Helpers.tmpPath('uploads'), file => ({
            name: `${Date.now()}-${file.clientName}`
        }))

        if (!images.movedAll()) {
            return images.errors()
        }

        await Promise.all(
            images
                .movedList()
                .map(image => property.images().create({ path: image.fileName }))
        )
    }
}

module.exports = ImageController
