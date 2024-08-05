/**
 * @swagger
 * /api/facturas:
 *   get:
 *     summary: Obtiene todas las facturas
 *     tags:
 *       - Facturas
 *     responses:
 *       200:
 *         description: Listar todas las facturas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Id de la factura
 *                     example: 6690afac22c1387ff54489f0
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     description: Fecha de la factura
 *                     example: 2024-08-03T00:00:00.000Z
 *                   cliente:
 *                     type: string
 *                     description: Id del cliente
 *                     example: 6690afac22c1387ff54489f0
 *                   valorTotal:
 *                     type: number
 *                     description: Valor total de la factura
 *                     example: 35000
 *                   vendedor:
 *                     type: string
 *                     description: Id del vendedor
 *                     example: 6690afac22c1387ff54489f0
 *       404:
 *         description: No se encontraron facturas
 *       500:
 *         description: Error al intentar listar facturas
 *   post:
 *     summary: Crea una nueva factura
 *     tags:
 *       - Facturas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la factura
 *                 example: 2024-08-03T00:00:00.000Z
 *               cliente:
 *                 type: string
 *                 description: Id del cliente
 *                 example: 6690afac22c1387ff54489f0
 *               valorTotal:
 *                 type: number
 *                 description: Valor total de la factura
 *                 example: 35000
 *               vendedor:
 *                 type: string
 *                 description: Id del vendedor
 *                 example: 6690afac22c1387ff54489f0
 *     responses:
 *       201:
 *         description: Factura creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id de la factura
 *                   example: 6690afac22c1387ff54489f0
 *                 fecha:
 *                   type: string
 *                   format: date
 *                   description: Fecha de la factura
 *                   example: 2024-08-03T00:00:00.000Z
 *                 cliente:
 *                   type: string
 *                   description: Id del cliente
 *                   example: 6690afac22c1387ff54489f0
 *                 valorTotal:
 *                   type: number
 *                   description: Valor total de la factura
 *                   example: 35000
 *                 vendedor:
 *                   type: string
 *                   description: Id del vendedor
 *                   example: 6690afac22c1387ff54489f0
 *       400:
 *         description: Entrada inválida
 *       500:
 *         description: Error al crear la factura
 */

/**
 * @swagger
 * /api/facturas/{id}:
 *   get:
 *     summary: Obtiene una factura por ID
 *     tags:
 *       - Facturas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la factura
 *     responses:
 *       200:
 *         description: Factura encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id de la factura
 *                   example: 6690afac22c1387ff54489f0
 *                 fecha:
 *                   type: string
 *                   format: date
 *                   description: Fecha de la factura
 *                   example: 2024-08-03T00:00:00.000Z
 *                 cliente:
 *                   type: string
 *                   description: Id del cliente
 *                   example: 6690afac22c1387ff54489f0
 *                 valorTotal:
 *                   type: number
 *                   description: Valor total de la factura
 *                   example: 35000
 *                 vendedor:
 *                   type: string
 *                   description: Id del vendedor
 *                   example: 6690afac22c1387ff54489f0
 *       404:
 *         description: Factura no encontrada
 *       500:
 *         description: Error al obtener la factura
 *   put:
 *     summary: Actualiza una factura por ID
 *     tags:
 *       - Facturas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la factura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la factura
 *                 example: 2024-08-03T00:00:00.000Z
 *               cliente:
 *                 type: string
 *                 description: Id del cliente
 *                 example: 6690afac22c1387ff54489f0
 *               valorTotal:
 *                 type: number
 *                 description: Valor total de la factura
 *                 example: 35000
 *               vendedor:
 *                 type: string
 *                 description: Id del vendedor
 *                 example: 6690afac22c1387ff54489f0
 *     responses:
 *       200:
 *         description: Factura actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id de la factura
 *                   example: 6690afac22c1387ff54489f0
 *                 fecha:
 *                   type: string
 *                   format: date
 *                   description: Fecha de la factura
 *                   example: 2024-08-03T00:00:00.000Z
 *                 cliente:
 *                   type: string
 *                   description: Id del cliente
 *                   example: 6690afac22c1387ff54489f0
 *                 valorTotal:
 *                   type: number
 *                   description: Valor total de la factura
 *                   example: 35000
 *                 vendedor:
 *                   type: string
 *                   description: Id del vendedor
 *                   example: 6690afac22c1387ff54489f0
 *       400:
 *         description: Entrada inválida
 *       404:
 *         description: Factura no encontrada
 *       500:
 *         description: Error al actualizar la factura
 *   delete:
 *     summary: Elimina una factura por ID
 *     tags:
 *       - Facturas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la factura
 *     responses:
 *       200:
 *         description: Factura eliminada exitosamente
 *       404:
 *         description: Factura no encontrada
 *       500:
 *         description: Error al eliminar la factura
 */
export const facturasDocs = {};
