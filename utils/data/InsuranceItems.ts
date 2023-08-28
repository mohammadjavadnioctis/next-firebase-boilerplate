import { InsuranceItemType } from "../types";
import ForeignerHealthIcon from '@/assets/images/icons/foreigner-health-icon.svg'
import TamamlayiciIcon from '@/assets/images/icons/tamamlayici-insurrance-icon.svg'
import SeyahatInssuranceIcon from '@/assets/images/icons/seyahat-insurrance-icon.svg'
import IncomingIcon from '@/assets/images/icons/incoming-insurrance-icon.svg'
import ImmIcon from '@/assets/images/icons/imm-insurance-icon.svg'
import KaskoIcon from '@/assets/images/icons/kasko-insurance-icon.svg'
import TrafficIcon from '@/assets/images/icons/trrafic-insurrance-icon.svg'
import DogumIcon from '@/assets/images/icons/dogum-insurance-icon.svg'
import DaskIcon from '@/assets/images/icons/dask-insurance-icon.svg'
import EvimGuvendeIcon from '@/assets/images/icons/evim-guvende-insurance-icon.svg'



const InsurranceItems: InsuranceItemType[] = [
    {
        label: 'Yabancı Sağlık',
        value: 'yabanci-sagilik',
        id: '0',
        Icon: ForeignerHealthIcon
    },
    {
        label: 'Tamamlayici Sigortası',
        value: 'tamamlayici',
        id: '1',
        Icon: TamamlayiciIcon
    },
    {
        label: 'Seyahat Sağlık',
        value: 'seyahat',
        id: '2',
        Icon: SeyahatInssuranceIcon
    },
    {
        label: 'İncoming',
        value: 'incoming',
        id: '3',
        Icon: IncomingIcon
    },
    {
        label: 'IMM',
        value: 'imm',
        id: '4',
        Icon: ImmIcon
    },
    {
        label: 'Kasko Sigortası',
        value: 'kasko',
        id: '5',
        Icon: KaskoIcon
    },
    {
        label: 'Trafik Sigortasi',
        value: 'trafik',
        id: '6',
        Icon: TrafficIcon
    },
    {
        label: 'Doğum Sigortası',
        value: 'dogum',
        id: '7',
        Icon: DogumIcon
    },
    {
        label: 'DASK Sigortası',
        value: 'dask',
        id: '8',
        Icon: DaskIcon
    },
    {
        label: 'Evim Güvende',
        value: 'ev',
        id: '9',
        Icon: EvimGuvendeIcon
    },
]

export default InsurranceItems