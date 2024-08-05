/**
 * @swagger
 * /api/vendedor:
 *   get:
 *     summary: Obtiene todos los vendedores
 *     tags:
 *       - Vendedores
 *     responses:
 *       200:
 *         description: Listar todos los vendedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Id del vendedor
 *                     example: 6690afac22c1387ff54489f0
 *                   usuario:
 *                     type: string
 *                     description: Usuario del vendedor
 *                     example: vendedor1
 *                   password:
 *                     type: string
 *                     description: Contraseña del vendedor
 *                     example: password123
 *       404:
 *         description: No se encontraron vendedores
 *       500:
 *         description: Error al intentar listar vendedores
 *   post:
 *     summary: Crea un nuevo vendedor
 *     tags:
 *       - Vendedores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 description: Usuario del vendedor
 *                 example: vendedor1
 *               password:
 *                 type: string
 *                 description: Contraseña del vendedor
 *                 example: password123
 *     responses:
 *       201:
 *         description: Vendedor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del vendedor
 *                   example: 6690afac22c1387ff54489f0
 *                 usuario:
 *                   type: string
 *                   description: Usuario del vendedor
 *                   example: vendedor1
 *                 password:
 *                   type: string
 *                   description: Contraseña del vendedor
 *                   example: password123
 *       400:
 *         description: Entrada inválida
 *       500:
 *         description: Error al crear el vendedor
 */

/**
 * @swagger
 * /api/vendedor/{id}:
 *   get:
 *     summary: Obtiene un vendedor por ID
 *     tags:
 *       - Vendedores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del vendedor
 *     responses:
 *       200:
 *         description: Vendedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del vendedor
 *                   example: 6690afac22c1387ff54489f0
 *                 usuario:
 *                   type: string
 *                   description: Usuario del vendedor
 *                   example: vendedor1
 *                 password:
 *                   type: string
 *                   description: Contraseña del vendedor
 *                   example: password123
 *       404:
 *         description: Vendedor no encontrado
 *       500:
 *         description: Error al obtener el vendedor
 *   put:
 *     summary: Actualiza un vendedor por ID
 *     tags:
 *       - Vendedores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del vendedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 description: Usuario del vendedor
 *                 example: vendedor1
 *               password:
 *                 type: string
 *                 description: Contraseña del vendedor
 *                 example: password123
 *     responses:
 *       200:
 *         description: Vendedor actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del vendedor
 *                   example: 6690afac22c1387ff54489f0
 *                 usuario:
 *                   type: string
 *                   description: Usuario del vendedor
 *                   example: vendedor1
 *                 password:
 *                   type: string
 *                   description: Contraseña del vendedor
 *                   example: password123
 *       400:
 *         description: Entrada inválida
 *       404:
 *         description: Vendedor no encontrado
 *       500:
 *         description: Error al actualizar el vendedor
 *   delete:
 *     summary: Elimina un vendedor por ID
 *     tags:
 *       - Vendedores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del vendedor
 *     responses:
 *       200:
 *         description: Vendedor eliminado exitosamente
 *       404:
 *         description: Vendedor no encontrado
 *       500:
 *         description: Error al eliminar el vendedor
 */
export const vendedoresDocs = {};
