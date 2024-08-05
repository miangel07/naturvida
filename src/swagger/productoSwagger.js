/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Listar todos los productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Id del producto
 *                     example: 6690afac22c1387ff54489f0
 *                   codigo:
 *                     type: number
 *                     description: Código del producto
 *                     example: 12345
 *                   descripcion:
 *                     type: string
 *                     description: Descripción del producto
 *                     example: Producto de ejemplo
 *                   valor:
 *                     type: number
 *                     description: Valor del producto
 *                     example: 10000
 *                   cantidad:
 *                     type: number
 *                     description: Cantidad del producto
 *                     example: 50
 *       404:
 *         description: No se encontraron productos
 *       500:
 *         description: Error al intentar listar productos
 *   post:
 *     summary: Crea un nuevo producto
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: number
 *                 description: Código del producto
 *                 example: 12345
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *                 example: Producto de ejemplo
 *               valor:
 *                 type: number
 *                 description: Valor del producto
 *                 example: 10000
 *               cantidad:
 *                 type: number
 *                 description: Cantidad del producto
 *                 example: 50
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del producto
 *                   example: 6690afac22c1387ff54489f0
 *                 codigo:
 *                   type: number
 *                   description: Código del producto
 *                   example: 12345
 *                 descripcion:
 *                   type: string
 *                   description: Descripción del producto
 *                   example: Producto de ejemplo
 *                 valor:
 *                   type: number
 *                   description: Valor del producto
 *                   example: 10000
 *                 cantidad:
 *                   type: number
 *                   description: Cantidad del producto
 *                   example: 50
 *       400:
 *         description: Entrada inválida
 *       500:
 *         description: Error al crear el producto
 */

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del producto
 *                   example: 6690afac22c1387ff54489f0
 *                 codigo:
 *                   type: number
 *                   description: Código del producto
 *                   example: 12345
 *                 descripcion:
 *                   type: string
 *                   description: Descripción del producto
 *                   example: Producto de ejemplo
 *                 valor:
 *                   type: number
 *                   description: Valor del producto
 *                   example: 10000
 *                 cantidad:
 *                   type: number
 *                   description: Cantidad del producto
 *                   example: 50
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al obtener el producto
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: number
 *                 description: Código del producto
 *                 example: 12345
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *                 example: Producto de ejemplo
 *               valor:
 *                 type: number
 *                 description: Valor del producto
 *                 example: 10000
 *               cantidad:
 *                 type: number
 *                 description: Cantidad del producto
 *                 example: 50
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Id del producto
 *                   example: 6690afac22c1387ff54489f0
 *                 codigo:
 *                   type: number
 *                   description: Código del producto
 *                   example: 12345
 *                 descripcion:
 *                   type: string
 *                   description: Descripción del producto
 *                   example: Producto de ejemplo
 *                 valor:
 *                   type: number
 *                   description: Valor del producto
 *                   example: 10000
 *                 cantidad:
 *                   type: number
 *                   description: Cantidad del producto
 *                   example: 50
 *       400:
 *         description: Entrada inválida
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al actualizar el producto
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al eliminar el producto
 */
export const productosDocs = {};
