import{Injectable} from '@nestjs/common';


@Injectable()
export class seedService{

   async runSeed(){
    return 'SEED EXECUTED';
   }

}