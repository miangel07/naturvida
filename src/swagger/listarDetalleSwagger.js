/**
 * @swagger
 * /api/detalle/listarDetalle:
 *   get:
 *     summary: Obtiene todos los detalles de las facturas
 *     tags:
 *       - consultas
 *     responses:
 *       200:
 *         description: Detalles listados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: Código de estado de la respuesta
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Mensaje de la respuesta
 *                   example: Detalles listadas correctamente
 *                 detalles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       producto:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: ID del producto
 *                             example: 6690afac22c1387ff54489f0
 *                           nombre:
 *                             type: string
 *                             description: Nombre del producto
 *                             example: Producto A
 *                           precio:
 *                             type: number
 *                             description: Precio del producto
 *                             example: 100.5
 *                           codigo:
 *                             type: number
 *                             description: Código del producto
 *                             example: 12345
 *                       cantidad:
 *                         type: number
 *                         description: Cantidad del detalle
 *                         example: 5
 *       404:
 *         description: No se encontraron detalles
 *       500:
 *         description: Error al obtener los detalles
 */

/**
 * @swagger
 * /api/detalle/listarFecha:
 *   post:
 *     summary: Obtiene detalles de las facturas filtrados por un rango de fechas
 *     tags:
 *       - consultas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del rango
 *                 example: 2024-01-01
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de fin del rango
 *                 example: 2024-01-31
 *     responses:
 *       200:
 *         description: Productos listados correctamente según la fecha indicada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: Código de estado de la respuesta
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Mensaje de la respuesta
 *                   example: Productos Listados correctamente según la Fecha indicada
 *                 detalles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       producto:
 *                         type: object
 *                         properties:
 *                           nombre:
 *                             type: string
 *                             description: Nombre del producto
 *                             example: Producto A
 *       500:
 *         description: No se encontraron productos con el rango de fechas proporcionado
 */

/**
 * @swagger
 * /api/detalle/VendedorPorducto:
 *   get:
 *     summary: Obtiene productos vendidos por vendedor
 *     tags:
 *       - consultas
 *     responses:
 *       200:
 *         description: Productos vendidos listados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: Código de estado de la respuesta
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Mensaje de la respuesta
 *                   example: Detalles listados correctamente
 *                 productos_Vendidos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       producto:
 *                         type: object
 *                         properties:
 *                           nombre:
 *                             type: string
 *                             description: Nombre del producto
 *                             example: Producto A
 *                       vendedor:
 *                         type: object
 *                         properties:
 *                           nombre:
 *                             type: string
 *                             description: Nombre del vendedor
 *                             example: Vendedor A
 *       500:
 *         description: Error al obtener los detalles
 */

/**
 * @swagger
 * /api/factura/listarFactura:
 *   get:
 *     summary: Obtiene todas las facturas
 *     tags:
 *       - consultas
 *     responses:
 *       200:
 *         description: Facturas listadas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: Código de estado de la respuesta
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Mensaje de la respuesta
 *                   example: Facturas listadas correctamente
 *                 facturas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: ID de la factura
 *                         example: 6690afac22c1387ff54489f0
 *                       valorTotal:
 *                         type: number
 *                         description: Valor total de la factura
 *                         example: 500.75
 *                       cliente_Cedula:
 *                         type: string
 *                         description: Cédula del cliente
 *                         example: 1006459235
 *                       cliente_Nombre:
 *                         type: string
 *                         description: Nombre del cliente
 *                         example: Miguel
 *                       vendedor_Nombre:
 *                         type: string
 *                         description: Nombre del vendedor
 *                         example: Vendedor A
 *       500:
 *         description: Error al obtener las facturas
 */

export const listarDeatlledocs = {};
