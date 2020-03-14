import { ReactComponent as User } from '../../../resources/images/icons/user.svg'
import { ReactComponent as Users } from '../../../resources/images/icons/users.svg'

interface StringTMap<T> {
  [key: string]: T
}

interface iconList extends StringTMap<React.FC> {}

export const iconList: iconList = {
  user: User,
  users: Users,
}
