/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
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
 *                     description: La cedula Del cliente
 *                     example: 1006459235
 *                   nombre:
 *                     type: string
 *                     description: Nombre del cliente
 *                     example: miguel
 *                   direccion:
 *                     type: string
 *                     description: Dirreccion del cliente
 *                     example: pitalito
 *                   telefono:
 *                     type: string
 *                     description: Telefono del cliente
 *                     example: 320226262
 *                   email:
 *                     type: string
 *                     description: El Email del usuario
 *                     example: miguelosoriorojas063@gmail.com
 *       404:
 *         description: "No se encontraron clientes"
 *       500:
 *         description: "Error al intentar listar clientes"
 *   post:
 *     summary: Crea un nuevo Cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The client's name
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The client's email
 *                 example: john.doe@example.com
 *     responses:
 *       201:
 *         description: Client created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The client ID
 *                   example: 6690afac22c1387ff54489f0
 *                 name:
 *                   type: string
 *                   description: The client's name
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   description: The client's email
 *                   example: john.doe@example.com
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Error creating client
 */
export const clientesDocs = {};
