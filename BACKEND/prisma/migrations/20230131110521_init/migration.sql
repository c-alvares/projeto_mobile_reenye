-- CreateTable
CREATE TABLE `estatus` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `situacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarefas` (
    `id_tarefa` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `hora_inicio` TIME NOT NULL,
    `hora_fim` TIME NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id_tarefa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tarefas` ADD CONSTRAINT `tarefas_status_fkey` FOREIGN KEY (`status`) REFERENCES `estatus`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;