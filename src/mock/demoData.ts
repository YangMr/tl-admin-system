import Mock from 'mockjs'
const Random = Mock.Random

const demo = {
  config: [
    {
      prop: 'id', //字段名称
      label: 'ID', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '1', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 80, //列的宽度
      fixed: 'left', //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'center', //对齐方式，同elementplus的属性left / center / right
      formatter: '0', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: '', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '', //type为5的时关联数据的加载地址
      dictKey: '', //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      edit: false, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minFiled: 'minId',
      maxFiled: 'maxId',
      minLength: 0, //最小长度
      maxLength: null //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'icon1', //字段名称
      label: '图标', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: false, //是否可用于搜索
      defaultSearch: false, //是否默认快捷搜索
      type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 100, //列的宽度
      fixed: 'left', //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'center', //对齐方式，同elementplus的属性left / center / right
      formatter: '0', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: '', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '', //type为5的时关联数据的加载地址
      dictKey: '', //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '19', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19图标选择
      edit: true, //该字段是否可编辑
      viewShow: true, //是否在详情页中展示
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: null //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'parent', //字段名称
      label: '上级', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '5', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 150, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '/api/demo/tableDemo/treeList', //type为5的时关联数据的加载地址
      linkEntityType: 'demo',
      endit: true,
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkEdit: true,
      group: '基础信息', //区分该字段的所属分组
      editType: '17', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19图标选择
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'name', //字段名称
      label: '名称', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 150, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '/api/demo/tableDemo/list', //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: '/api/demo/tableDemo/info', //需要跳转时的跳转地址
      linkEntityType: 'demo',
      linkEdit: true,
      group: '基础信息', //区分该字段的所属分组
      editType: '9', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'createDate', //字段名称
      label: '创建时间', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '3', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 180, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'center', //对齐方式，同elementplus的属性left / center / right
      formatter: 'YYYY-MM-DD HH:mm:ss', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '1', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框
      dateType: 'datetime', //year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange
      dateSearchType: 'datetimerange', //year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'workTime', //字段名称
      label: '工作时间', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '4', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 120, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'center', //对齐方式，同elementplus的属性left / center / right
      formatter: 'HH:mm:ss', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '15', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框
      dateType: 'datetime', //year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange/timerange
      dateSearchType: 'timerange', //year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'kechenTime', //字段名称
      label: '上课时间', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '4', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 120, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'center', //对齐方式，同elementplus的属性left / center / right
      formatter: 'HH:mm', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '16', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框
      dateType: '', //year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange/timerange
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'attr', //字段名称
      label: '属性', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '5', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 250, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '/api/demo/tableDemo/treeList', //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: true, //当前字段是否是个列表,
      linkUrl: '/api/demo/tableDemo/info', //需要跳转时的跳转地址
      linkEntityType: 'demo',
      endit: true,
      group: '基础信息', //区分该字段的所属分组
      editType: '17', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'cascader', //字段名称
      label: '级联组件', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '5', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 250, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '/api/demo/tableDemo/cascaderList', //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: true, //当前字段是否是个列表,
      linkUrl: '/api/demo/tableDemo/info', //需要跳转时的跳转地址
      linkEntityType: 'demo',
      endit: true,
      group: '基础信息', //区分该字段的所属分组
      editType: '10', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'createUser', //字段名称
      label: '创建人', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '5', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 150, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '/api/user/list', //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: '/index/user/info', //需要跳转时的跳转地址
      linkEntityType: 'user',
      linkEdit: true,
      endit: true,
      group: '基础信息', //区分该字段的所属分组
      editType: '5', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义组件
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'order', //字段名称
      label: '订单记录', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '5', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 250, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: 'name', //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: '/api/user/list', //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: true, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '1', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'status', //字段名称
      label: '状态', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '6', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 100, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: 'demo-status', //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '1', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: null //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'type', //字段名称
      label: '类型', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '6', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 200, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: 'demo-type', //type为6时的数据字典的标识
      multiple: true, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '7', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: null //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'from_', //字段名称
      label: '来源', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '6', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 100, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: 'demo-from', //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '8', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: null //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'icon', //字段名称
      label: '图标', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: false, //是否可用于搜索
      defaultSearch: false, //是否默认快捷搜索
      type: '7', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      customer: true, //标识当前字段在列表中是否是自定义展示的
      width: 100, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: false, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'center', //对齐方式，同elementplus的属性left / center / right
      formatter: null, //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: false, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '3', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: true, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 255, //如果非标识不显示，其它数字则标识限制
      fileCount: 1, //文件上传数量的限制
      fileType: null, //文件类型的限制
      fileLength: 2048, //文件尺寸的限制
      fileUploadUrl: '/api/system/fileUpload/demo' //文件上传的URL路径
    },
    {
      prop: 'color', //字段名称
      label: '颜色', //字段显示名
      tableShow: true, //是否在表格中显示
      search: false, //是否可用于搜索
      defaultSearch: false, //是否默认快捷搜索
      tableDefaultShow: true, //是否在表格中默认展示
      type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 100, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '11', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 10000 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'count', //字段名称
      label: '数字', //字段显示名
      tableShow: true, //是否在表格中显示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      tableDefaultShow: true, //是否在表格中默认展示
      type: '1', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 100, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '2', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '18', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      min: 0, //最小值
      max: 100, //最大值
      minFiled: 'minCount',
      maxFiled: 'maxCount',
      step: 1, //每次添加多少
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'scope_', //字段名称
      label: '打分', //字段显示名
      tableShow: true, //是否在表格中显示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      tableDefaultShow: true, //是否在表格中默认展示
      type: '1', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 300, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '12', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      min: 0, //最小值
      max: 10, //最大值
      minFiled: 'minScope_',
      maxFiled: 'maxScope_',
      step: 1, //每次添加多少
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'huakuai', //字段名称
      label: '阶段', //字段显示名
      tableShow: true, //是否在表格中显示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      tableDefaultShow: true, //是否在表格中默认展示
      type: '1', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 200, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '13', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      min: 0, //最小值
      max: 100, //最大值
      minFiled: 'minHuakuai',
      maxFiled: 'maxHuakuai',
      step: 1, //每次添加多少
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'need', //字段名称
      label: '是否需要', //字段显示名
      tableShow: true, //是否在表格中显示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      tableDefaultShow: true, //是否在表格中默认展示
      type: '6', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 120, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: 'need', //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '基础信息', //区分该字段的所属分组
      editType: '14', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本,5自定义，6下拉选择，7复选框，8单选框，9自动补全输入框，10级联选择框，11颜色选择，12评分，13滑块，14开关，15时间选择器，16时间选择，17树形选择框，18数字输入框，19
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      min: 0, //最小值
      max: 100, //最大值
      step: 1, //每次添加多少
      minLength: 0, //最小长度
      maxLength: 0 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'content', //字段名称
      label: '内容', //字段显示名
      tableShow: true, //是否在表格中显示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      tableDefaultShow: false, //是否在表格中默认展示
      type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 200, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '内容', //区分该字段的所属分组
      editType: '4', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: false, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 10000 //如果非标识不显示，其它数字则标识限制
    },
    {
      prop: 'description', //字段名称
      label: '备注', //字段显示名
      tableShow: true, //是否在表格中显示
      tableDefaultShow: true, //是否在表格中默认展示
      search: true, //是否可用于搜索
      defaultSearch: true, //是否默认快捷搜索
      type: '2', //1.数字，2字符串，3日期，4时间，5关联对象，6数据字典，7图片
      width: 200, //列的宽度
      fixed: null, //是否固定，同elementplus的属性true / 'left' / 'right'
      sortable: true, //是否可排序，同elementplus的属性true / 'left' / 'right'
      align: 'left', //对齐方式，同elementplus的属性left / center / right
      formatter: '', //type为1/3/5的是否的格式，1的时候保留几位小数、3,4日期的格式
      linkObjShowKey: null, //type为5的时候指定关联对象用于展示的字段名，
      linkObjLoadUrl: null, //type为5的时关联数据的加载地址
      dictKey: null, //type为6时的数据字典的标识
      multiple: null, //当前字段是否是个列表,
      linkUrl: null, //需要跳转时的跳转地址
      group: '备注', //区分该字段的所属分组
      editType: '2', //该字段的编辑或者展示组件，1文本，2文本域，3文件上传，4富文本
      viewShow: true, //是否在详情页中展示
      edit: true, //该字段是否可编辑
      none: true, //该字段是否能为空
      regExp: null, //验证的正则
      minLength: 0, //最小长度
      maxLength: 255 //如果非标识不显示，其它数字则标识限制
    }
  ],
  // total: (Math.random() * 100).toFixed(0) * 1,
  datas: []
}
// for (let i = 0; i < demo.total; i++) {
//   let parent = null
//   const attrs = []
//   if (i > 0) {
//     parent = {
//       id: 1,
//       name: demo.datas[0].name
//     }
//   }
//   if (i > 1) {
//     attrs.push({
//       id: demo.datas[0].id,
//       name: demo.datas[0].name
//     })
//     attrs.push({
//       id: demo.datas[1].id,
//       name: demo.datas[1].name
//     })
//   }
//   const cascader = []
//   if (i > 1) {
//     cascader.push(
//       {
//         id: demo.datas[0].id,
//         name: demo.datas[0].name
//       },
//       {
//         id: demo.datas[1].id,
//         name: demo.datas[1].name
//       }
//     )
//   }
//   let permissions = []
//   if (i % 4 == 0) {
//     permissions = ['edit', 'download', 'delete']
//   } else if (i % 4 == 1) {
//     permissions = ['edit']
//   } else if (i % 4 == 2) {
//     permissions = ['download']
//   } else if (i % 4 == 3) {
//     permissions = ['delete']
//   }
//   demo.datas.push({
//     id: i + 1,
//     name: Random.ctitle(),
//     icon: Random.image(30 * 30),
//     icon1: 'Notification',
//     createDate: new Date().getTime(),
//     workTime: new Date().getTime(),
//     kechenTime: new Date().getTime(),
//     parent: parent,
//     createUser: {
//       id: 11,
//       name: '管理员11'
//     },
//     order: [
//       {
//         id: 22,
//         name: '管理员22'
//       },
//       {
//         id: 33,
//         name: '管理员33'
//       }
//     ],
//     attr: attrs,
//     cascader: cascader,
//     status: i % 3 == 0 ? '1' : i % 3 == 1 ? '2' : '3',
//     type: i % 3 == 0 ? '1;2' : i % 3 == 1 ? '2;3' : '3;1',
//     from_: i % 3 == 0 ? '1' : i % 3 == 1 ? '2' : '3',
//     color: Random.color(),
//     count: Math.abs(Random.integer() % 100),
//     scope_: Math.abs(Random.integer() % 10),
//     huakuai: Math.abs(Random.integer() % 100),
//     need: Random.boolean(),
//     content: Random.csentence(),
//     description: Random.csentence(),
//     permissions: permissions
//   })
// }

Mock.mock('/api/entity', (options) => {
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数为空'
    }
  }
  return {
    code: 888,
    message: '',
    data: demo.config
  }
})

// //拦截列表示例数据
// Mock.mock('/api/demo/tableDemo', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   if (!pama.page || !pama.page.pageNo) {
//     pama.page.pageNo = 1
//   }
//   const data = []
//   for (
//     let i = (pama.page.pageNo - 1) * pama.page.pageSize;
//     i < demo.total && data.length <= pama.page.pageSize;
//     i++
//   ) {
//     data.push(demo.datas[i])
//   }
//   return {
//     code: 888,
//     message: '',
//     data: {
//       pageNo: pama.page.pageNo,
//       pageSize: pama.page.pageSize,
//       total: demo.total,
//       datas: data
//     }
//   }
// })
// //拦截列表示例数据
// Mock.mock('/api/demo/tableDemo/treeList', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   const data = []
//   utils.toTreeData(demo.datas, null, data)
//   return {
//     code: 888,
//     message: '',
//     data: data
//   }
// })

// //拦截列表示例数据
// Mock.mock('/api/demo/tableDemo/cascaderList', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   const data = utils.getChildren(demo.datas, pama)
//   return {
//     code: 888,
//     message: '',
//     data: data
//   }
// })

// Mock.mock('/api/demo/tableDemo/list', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   const data = []

//   if (pama && pama.name) {
//     demo.datas.forEach((item, index) => {
//       if (item.name.indexOf(pama.name) != -1) {
//         data.push(item)
//       }
//     })
//   } else {
//     data.push(...demo.datas)
//   }

//   return {
//     code: 888,
//     message: '',
//     data: data
//   }
// })

// //拦截删除数据接口
// Mock.mock('/api/demo/tableDemo/delete', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   if (!pama.id) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   for (let i = 0; i < demo.datas.length; i++) {
//     if (demo.datas[i].id == pama.id) {
//       demo.datas.splice(i, 1)
//       i--
//     }
//   }
//   demo.total = demo.datas.length
//   return {
//     code: 888,
//     message: ''
//   }
// })
// //拦截删除数据接口
// Mock.mock('/api/demo/tableDemo/delete/check', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   if (!pama.ids) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   for (let i = 0; i < demo.datas.length; i++) {
//     for (let j = 0; j < pama.ids; j++) {
//       if (demo.datas[i].id == pama.ids[j]) {
//         demo.datas.splice(i, 1)
//         i--
//       }
//     }
//   }
//   demo.total = demo.datas.length
//   return {
//     code: 888,
//     message: ''
//   }
// })
// //拦截删除数据接口
// Mock.mock('/api/demo/tableDemo/delete/all', (options) => {
//   if (!options) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   demo.datas.splice(0, demo.datas.length)
//   demo.total = demo.datas.length
//   return {
//     code: 888,
//     message: ''
//   }
// })
// //拦截删除数据接口
// Mock.mock('/api/demo/tableDemo/info', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   if (!pama.id) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   let data = null
//   for (let i = 0; i < demo.total; i++) {
//     if (demo.datas[i].id == pama.id) {
//       data = demo.datas[i]
//       break
//     }
//   }
//   return {
//     code: 888,
//     message: '',
//     data: data
//   }
// })

// //拦截保存数据接口
// Mock.mock('/api/demo/tableDemo/save', (options) => {
//   if (!options || !options.body) {
//     return {
//       code: 101,
//       message: '参数为空'
//     }
//   }
//   const pama = JSON.parse(options.body)
//   if (pama.id) {
//     for (let i = 0; i < demo.total; i++) {
//       if (demo.datas[i].id == pama.id) {
//         demo.datas[i] = pama
//       }
//     }
//   } else {
//     pama.id = demo.datas.length + 1
//     pama.createDate = new Date().getTime()
//     pama.createUser = user.userInfo
//     demo.datas.push(pama)
//     demo.total = demo.datas.length
//   }
//   return {
//     code: 888,
//     message: ''
//   }
// })

export default demo
