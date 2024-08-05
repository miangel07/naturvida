/**
 * @swagger
 * /api/detalles:
 *   get:
 *     summary: Obtiene todos los detalles
 *     tags:
 *       - Detalles
 *     responses:
 *       200:
 *         description: Listar todos los detalles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Id del detalle
 *                     example: 6690afac22c1387ff54489f0
 *                   numero:
 *                     type: string
 *                     description: Id de la factura
 *                     example: 6690afac22c1387ff54489f0
 *                   producto:
 *                     type: string
 *                     description: Id del producto
 *                     example: 6690afac22c1387ff54489f0
 *                   cantidad:
 *                     type: number
 *                     description: Cantidad del producto
 *                     example: 5
 *       404:
 *         description: No se encontraron detalles
 *       500:
 *         description: Error al intentar listar detalles
 *   post:
 *     summary: Crea un nuevo detalle
 *     tags:
 *       - Detalles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: string
 *                 description: Id de la factura
 *                 example: 6690afac22c1387ff54489f0
 *               producto:
 *                 type: string
 *                 description: Id del producto
 *                 example: 6690afac22c1387ff54489f0
 *               cantidad:
 *                 type: number
 *                 description: Cantidad del producto
 *                 example: 5
 *     responses:
 *       201:
 *         description: Detalle creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del detalle
 *                   example: 6690afac22c1387ff54489f0
 *                 numero:
 *                   type: string
 *                   description: Id de la factura
 *                   example: 6690afac22c1387ff54489f0
 *                 producto:
 *                   type: string
 *                   description: Id del producto
 *                   example: 6690afac22c1387ff54489f0
 *                 cantidad:
 *                   type: number
 *                   description: Cantidad del producto
 *                   example: 5
 *       400:
 *         description: Entrada inválida
 *       500:
 *         description: Error al crear el detalle
 */

/**
 * @swagger
 * /api/detalles/{id}:
 *   get:
 *     summary: Obtiene un detalle por ID
 *     tags:
 *       - Detalles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del detalle
 *     responses:
 *       200:
 *         description: Detalle encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del detalle
 *                   example: 6690afac22c1387ff54489f0
 *                 numero:
 *                   type: string
 *                   description: Id de la factura
 *                   example: 6690afac22c1387ff54489f0
 *                 producto:
 *                   type: string
 *                   description: Id del producto
 *                   example: 6690afac22c1387ff54489f0
 *                 cantidad:
 *                   type: number
 *                   description: Cantidad del producto
 *                   example: 5
 *       404:
 *         description: Detalle no encontrado
 *       500:
 *         description: Error al obtener el detalle
 *   put:
 *     summary: Actualiza un detalle por ID
 *     tags:
 *       - Detalles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del detalle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: string
 *                 description: Id de la factura
 *                 example: 6690afac22c1387ff54489f0
 *               producto:
 *                 type: string
 *                 description: Id del producto
 *                 example: 6690afac22c1387ff54489f0
 *               cantidad:
 *                 type: number
 *                 description: Cantidad del producto
 *                 example: 5
 *     responses:
 *       200:
 *         description: Detalle actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del detalle
 *                   example: 6690afac22c1387ff54489f0
 *                 numero:
 *                   type: string
 *                   description: Id de la factura
 *                   example: 6690afac22c1387ff54489f0
 *                 producto:
 *                   type: string
 *                   description: Id del producto
 *                   example: 6690afac22c1387ff54489f0
 *                 cantidad:
 *                   type: number
 *                   description: Cantidad del producto
 *                   example: 5
 *       400:
 *         description: Entrada inválida
 *       404:
 *         description: Detalle no encontrado
 *       500:
 *         description: Error al actualizar el detalle
 *   delete:
 *     summary: Elimina un detalle por ID
 *     tags:
 *       - Detalles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del detalle
 *     responses:
 *       200:
 *         description: Detalle eliminado exitosamente
 *       404:
 *         description: Detalle no encontrado
 *       500:
 *         description: Error al eliminar el detalle
 */
export const detallesDocs = {};
