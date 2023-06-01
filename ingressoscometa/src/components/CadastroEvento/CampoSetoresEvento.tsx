import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox'

export default function CampoSetoresEvento(props: any){
    return(
        <div className="flex flex-col gap-4">
            <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                <Checkbox value='vip'>VIP</Checkbox>
                <Checkbox value='backstage'>Backstage</Checkbox>
                <Checkbox value='camarote'>Camarote</Checkbox>
            </CheckboxGroup>
        </div>
    )
}