/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags:
 *       - Clientes
 *     responses:
 *       200:
 *         description: Listar Todos los clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Id del Cliente
 *                     example: 6690afac22c1387ff54489f0
 *                   cedula:
 *                     type: string
 *                     description: La cédula del cliente
 *                     example: 1006459235
 *                   nombre:
 *                     type: string
 *                     description: Nombre del cliente
 *                     example: Miguel
 *                   direccion:
 *                     type: string
 *                     description: Dirección del cliente
 *                     example: Pitalito
 *                   telefono:
 *                     type: string
 *                     description: Teléfono del cliente
 *                     example: 320226262
 *                   email:
 *                     type: string
 *                     description: El email del cliente
 *                     example: miguelosoriorojas063@gmail.com
 *       404:
 *         description: No se encontraron clientes
 *       500:
 *         description: Error al intentar listar clientes
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags:
 *       - Clientes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: number
 *                 description: Cédula del cliente
 *                 example: 1006459235
 *               nombre:
 *                 type: string
 *                 description: Nombre del cliente
 *                 example: John Doe
 *               direccion:
 *                 type: string
 *                 description: Dirección del cliente
 *                 example: Pitalito
 *               telefono:
 *                 type: string
 *                 description: Teléfono del cliente
 *                 example: 320226262
 *               email:
 *                 type: string
 *                 description: Email del cliente
 *                 example: john.doe@example.com
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del Cliente
 *                   example: 6690afac22c1387ff54489f0
 *                 cedula:
 *                   type: number
 *                   description: Cédula del cliente
 *                   example: 1006459235
 *                 nombre:
 *                   type: string
 *                   description: Nombre del cliente
 *                   example: John Doe
 *                 direccion:
 *                   type: string
 *                   description: Dirección del cliente
 *                   example: Pitalito
 *                 telefono:
 *                   type: string
 *                   description: Teléfono del cliente
 *                   example: 320226262
 *                 email:
 *                   type: string
 *                   description: Email del cliente
 *                   example: john.doe@example.com
 *       400:
 *         description: Entrada inválida
 *       500:
 *         description: Error al crear el cliente
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del Cliente
 *                   example: 6690afac22c1387ff54489f0
 *                 cedula:
 *                   type: number
 *                   description: Cédula del cliente
 *                   example: 1006459235
 *                 nombre:
 *                   type: string
 *                   description: Nombre del cliente
 *                   example: John Doe
 *                 direccion:
 *                   type: string
 *                   description: Dirección del cliente
 *                   example: Pitalito
 *                 telefono:
 *                   type: string
 *                   description: Teléfono del cliente
 *                   example: 320226262
 *                 email:
 *                   type: string
 *                   description: Email del cliente
 *                   example: john.doe@example.com
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error al obtener el cliente
 *   put:
 *     summary: Actualiza un cliente por ID
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: number
 *                 description: Cédula del cliente
 *                 example: 1006459235
 *               nombre:
 *                 type: string
 *                 description: Nombre del cliente
 *                 example: John Doe
 *               direccion:
 *                 type: string
 *                 description: Dirección del cliente
 *                 example: Pitalito
 *               telefono:
 *                 type: string
 *                 description: Teléfono del cliente
 *                 example: 320226262
 *               email:
 *                 type: string
 *                 description: Email del cliente
 *                 example: john.doe@example.com
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del Cliente
 *                   example: 6690afac22c1387ff54489f0
 *                 cedula:
 *                   type: number
 *                   description: Cédula del cliente
 *                   example: 1006459235
 *                 nombre:
 *                   type: string
 *                   description: Nombre del cliente
 *                   example: John Doe
 *                 direccion:
 *                   type: string
 *                   description: Dirección del cliente
 *                   example: Pitalito
 *                 telefono:
 *                   type: string
 *                   description: Teléfono del cliente
 *                   example: 320226262
 *                 email:
 *                   type: string
 *                   description: Email del cliente
 *                   example: john.doe@example.com
 *       400:
 *         description: Entrada inválida
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error al actualizar el cliente
 *   delete:
 *     summary: Elimina un cliente por ID
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error al eliminar el cliente
 */
export const clientesDocs = {};
