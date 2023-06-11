import express, { Request, Response } from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';


const router = express.Router();

router.get('/backup', async (req: Request, res: Response) => {
    const dbNome = 'cometadb';
    const backupPath = '/IngressosCometa/backup';
    const backupProcess = spawn('mysqldump', [
        '-h',
        'cometacngressosserver.mysql.database.azure.com',
        '-u',
        'cometaingressos',
        '-p',
        'Vaidormir23',
        dbNome,
        '--result-file=' + backupPath
    ]);

    backupProcess.on('close', (code) => {
        if (code === 0) {
            res.status(200).send('Backup realizado com sucesso!');
        } else {
            res.status(500).send('Erro ao realizar backup.');
        }
    });
}
);
export default router;


