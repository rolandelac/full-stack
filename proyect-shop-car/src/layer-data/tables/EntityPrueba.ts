import {Column, Entity, Generated, PrimaryColumn} from "typeorm";

@Entity()
export class EntityPrueba {

        @PrimaryColumn()
        @Generated("uuid")
        id_prueba: string
    
        @Column({nullable: false})
        name: string
    
       
}
