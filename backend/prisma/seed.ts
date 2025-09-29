const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  //   Seed Classes
  const classes = await Promise.all([
    prisma.class.create({
      data: {
        name: "JHS 1",
        id: 1,
      },
    }),
    prisma.class.create({
      data: {
        name: "JHS 2",
        id: 2,
      },
    }),
  ]);

  // Seed Users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: "super@canteen.com",
        password: "password",
        name: "Ama Owusu",
        phone: "0241234567",
        role: "SUPER_ADMIN",
        gender: "female",
      },
    }),
    prisma.user.create({
      data: {
        email: "nkrumah@example.com",
        password: "password",
        name: "Kwame Nkrumah",
        phone: "0542335678",
        role: "TEACHER",
        gender: "male",
        assigned_class: {
          connect: {
            id: 1,
          },
        },
      },
    }),
  ]);

  console.log("Seeded users:", users);

  console.log("Seeded classes:", classes);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
