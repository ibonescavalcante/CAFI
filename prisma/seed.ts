const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcript = require("bcrypt");

//npx prisma db seed

async function main() {
  // Criação de um usuário admin padrão
  const senha = await bcript.hash("102030", 10);
  const admin = await prisma.user.upsert({
    where: { user: "admin" },
    update: {},
    create: {
      nome: "Admin",
      user: "admin",
      senha: senha, // Lembre-se de hashear a senha
      tipo: "admin",
      status: "ativo",
    },
  });

  console.log("Usuário admin criado:", admin);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
